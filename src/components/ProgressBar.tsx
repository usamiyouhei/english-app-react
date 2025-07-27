

type Props = {
  current: number;
  total: number;
  label?: string;
}

export default function ProgressBar ({current, total, label}: Props) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return(
    <div className="w-full my-4">
      {label &&  <p className="text-sm mb-1 text-gray-600">{label}</p>}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-4 transition-all"
          style={{ width:`${percentage}%`}}/>
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">
        {current} / {total}({percentage}%)
      </p>
    </div>
  )
}