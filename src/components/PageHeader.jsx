function PageHeader({ title, children }) {
  return (
    <header className="max-w-2xl">
      <h1 className="text-4xl font-bold leading-[1.08] md:text-5xl">{title}</h1>
      {children && <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{children}</p>}
    </header>
  );
}

export default PageHeader;
