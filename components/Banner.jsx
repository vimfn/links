function Banner({ icon, label }) {
    return (
      <div>
        <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1">
          <span className="w-5">{icon}</span>
          <span className="text-banner text-xs">{label}</span>
        </div>
      </div>
    );
  }
  
  function Banners() {
    return (
      <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
        <Banner icon="💻" label="Coder" />
        <Banner icon="🎨" label="Designer" />
        <Banner icon="🎐" label="Anime" />
        <Banner icon="♟️" label="Chess" />
        <Banner icon="🎵" label="Music" />
      </div>
    );
  }

export default Banners;