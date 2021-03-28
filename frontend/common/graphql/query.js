
export const allProjects = {
  query: `query {
    projects {
      id
      title
      slug
      shortDescription
    }
  }`
}

export const Project = `query Projects($slug: String!) {
  projects(where: {slug: $slug}) {
    id
    slug
    title,
    shortDescription,
    description,
    goal,
    dateEnd,
    thumbnail {
      url
    }
  }
}`
