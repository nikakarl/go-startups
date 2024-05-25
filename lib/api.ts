import { createClient } from "contentful";
import { draftMode } from "next/headers";
import * as contentful from "contentful";

const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

type GenericPageEntrySkeleton = {
  contentTypeId: "genericPage";
  fields: {
    slug: contentful.EntryFieldTypes.Text;
    components: contentful.EntryFieldTypes.Array<
      contentful.EntryFieldTypes.EntryLink<BannerEntrySkeleton>
    >;
  };
};

type BannerEntrySkeleton = {
  contentTypeId: "banner";
  fields: {
    heading: contentful.EntryFieldTypes.Text;
    content: contentful.EntryFieldTypes.Text;
    ctaText: contentful.EntryFieldTypes.Text;
    ctaLink: contentful.EntryFieldTypes.Text;
    image: contentful.EntryFieldTypes.AssetLink;
  };
};

export const getGenericPage = async (slug: string, isDraftMode: boolean) => {
  let accessToken: string;
  let host: string;

  if (isDraftMode) {
    host = "preview.contentful.com";
    accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string;
  } else {
    host = "cdn.contentful.com";
    accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
  }
  const client = createClient({
    space: "ac3bh8bak2sr",
    accessToken: accessToken,
    host: host,
  });
  const responseFromContentful =
    await client.withoutUnresolvableLinks.getEntries<GenericPageEntrySkeleton>({
      content_type: "genericPage",
      "fields.slug": slug,
      include: 10,
    });
  return responseFromContentful;
};

// https://graphql.contentful.com/content/v1/spaces/ac3bh8bak2sr/explore?access_token=u2KXOdoTqLQXOG6FpArGvMQEA70kbS-qYOMpiTROxJU
