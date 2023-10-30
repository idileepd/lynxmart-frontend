import { SearchBar } from '@/components/SearchBar';
import { IconLogo } from '@/components/IconLogo';

export const HomePage = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className=" flex h-16 items-center justify-between mx-8">
          <IconLogo />
          <SearchBar />
          <div className="flex items-center justify-between gap-4">
            <div>cool</div>
          </div>
        </div>
      </header>
      <div style={{ marginTop: '10000px' }}>tet</div>
    </div>
  );
};
