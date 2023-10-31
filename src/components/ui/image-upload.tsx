'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ImagePlus, Trash } from 'lucide-react'
import { CldUploadWidget } from 'next-cloudinary'

interface ImageUploadProps {
  disabled?: boolean
  onChange: (value: string) => void
  onRemove: (value: string) => void
  value: string[]
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }
  return (
    <>
      <div className='mb-4 flex items-center gap-4'>
        {value.map(url => (
          <div
            className='relative w-[200px] h-[200px] rounded-md overflow-hidden'
            key={url}
          >
            <div className='z-10 absolute top-2 right-2'>
              <Button
                type='button'
                variant='destructive'
                size='icon'
                onClick={() => onRemove(url)}
              >
                <Trash className='h-4 w-4' />
              </Button>
            </div>
            <Image fill className='object-cover' alt='Image' src={url} />
          </div>
        ))}
        <CldUploadWidget onUpload={onUpload} uploadPreset='kuru7num'>
          {({ open }) => {
            const handleOnClick = () => {
              open()
            }

            return (
              <Button
                type='button'
                disabled={disabled}
                variant='secondary'
                onClick={handleOnClick}
              >
                <ImagePlus className='h-4 w-4 mr-2' />
                {'Upload an Image'}
              </Button>
            )
          }}
        </CldUploadWidget>
      </div>
    </>
  )
}

export default ImageUpload
