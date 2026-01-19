export default function ProjectCard({ title, desc }) {
  return (
    <div className="group border border-neutral-800 p-6 rounded-xl hover:border-neutral-500 transition">
      <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">
        {title}
      </h3>
      <p className="text-neutral-400">{desc}</p>
    </div>
  );
}
