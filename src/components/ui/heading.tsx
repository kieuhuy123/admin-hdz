interface HeadingProps {
  title: string
  description: string
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className=''>
      <h2 className='text-2xl font-bold flex items-center justify-between'>
        {title}
      </h2>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  )
}
