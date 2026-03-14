export interface PublishableProject {
  id?: string;
  year?: string | number;
  published?: boolean;
}

export const isProjectVisible = (project: PublishableProject) => project.published !== false;

const toNumber = (value: string | number | undefined) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const sortProjectsDescending = <T extends PublishableProject>(projects: T[]) =>
  [...projects].sort((a, b) => {
    const yearDiff = toNumber(b.year) - toNumber(a.year);
    if (yearDiff !== 0) {
      return yearDiff;
    }

    return toNumber(b.id) - toNumber(a.id);
  });
