interface WorkItemProps {
  title: string;
  company: string;
  date: string;
  description?: string;
}

export default function WorkItem({ title, company, date, description }: WorkItemProps) {
  return (
    <li className="mb-6 border-b border-gray-200 pb-6 last:border-b-0">
      <div>{date}</div>
      <strong>{company}</strong> - {title}
      {description ? <p>{description}</p> : null}
    </li>
  )
}
