
export const fetchProjects = {
  query: `query {
    projects {
      id
      title
      slug
      shortDescription
    }
  }`
}

export const fetchProjectBySlug = `query Projects($slug: String!) {
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
    rewards {
      id
      title
      description
      minimumPledge
      quantity
    }
  }
}`
