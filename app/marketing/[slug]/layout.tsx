import Providers from "@/components/Client/Providers";
import TrackPage from "@/components/Client/TrackPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <TrackPage />
      {children}
    </Providers>
  );
}
