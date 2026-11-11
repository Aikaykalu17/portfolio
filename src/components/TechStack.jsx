import PageHeader from "./PageHeader";
import { techGroups } from "./TechIcons";

function TechStack() {
  return (
    <section className="container-x pb-16 pt-6 md:pb-24 md:pt-10">
      <PageHeader title="The tools I use to build the web.">
        The technologies I rely on to build fast, modern and responsive products.
        The right tools make the process smoother and the product better.
      </PageHeader>

      <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {techGroups.map((group) => (
          <section key={group.title} aria-labelledby={`g-${group.title}`}>
            <h2 id={`g-${group.title}`} className="text-xl font-bold">
              {group.title}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {group.items.map(({ name, icon: Icon, note }) => (
                <li key={name} className="card flex items-center gap-4 p-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-bg"
                  >
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm leading-snug text-muted">{note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
