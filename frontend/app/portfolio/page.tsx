import { getProjects } from "../utils/api-helpers";
import Blog from "../views/blog-list";

export default async function Profile() {
  const response = await getProjects();
  return (
    <div>
      <Blog data={response.data} />
    </div>
  );
}
