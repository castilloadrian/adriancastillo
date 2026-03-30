interface ExperienceItem {
  years: string
  role: string
}

interface CompanyExperience {
  company: string
  roles: ExperienceItem[]
}

const experiences: CompanyExperience[] = [
  {
    company: 'etsy',
    roles: [
      {
        years: 'july 2025 - present',
        role: 'software engineer ii',
      },
    ],
  },
  {
    company: 'hellofresh',
    roles: [
      {
        years: 'feb 2025 - july 2025',
        role: 'software engineer',
      },
    ],
  },
  {
    company: 'h-e-b',
    roles: [
      {
        years: 'mar 2022 - feb 2025',
        role: 'software engineer ii',
      },
      {
        years: 'sept 2021 - mar 2022',
        role: 'software engineer i',
      },
      {
        years: 'june 2021 - july 2021',
        role: 'software engineer intern',
      },
      {
        years: 'june 2020 - july 2020',
        role: 'software engineer intern',
      },
    ],
  },
]

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">experience</h2>
      <div className="space-y-3">
        {experiences.flatMap((company) =>
          company.roles.map((role) => (
            <div
              key={`${company.company}-${role.role}-${role.years}`}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <p className="text-lg">
                <span className="font-medium text-foreground">
                  {company.company}
                </span>
                <span className="text-muted-foreground">, {role.role}</span>
              </p>
              <span className="text-sm text-muted-foreground">
                {role.years}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
