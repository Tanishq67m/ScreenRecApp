'use client'

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import {useFileInputs} from '@/lib/hooks/useFileInputs';
import { MAX_VIDEO_SIZE } from '@/constants';
import { MAX_THUMBNAIL_SIZE } from '@/constants';
import { set } from 'better-auth'

import { ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

import { FormEvent } from 'react'
import React, { useState } from 'react'

const Page = () => {


  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


    try{
      if(!video.file || !thumbnail.file) {
        setError('Please select a video and a thumbnail');
        return;
      }

      if(!formData.title || !formData.description) {
        setError('Please fill in all fields');
        return;
      }
      
    }

    catch (error) {
      console.error("error", error);
  }
    finally {
      setIsSubmitting(false);
    }
  

}

  const [formData, setformData] = useState({
    title: '',
    description: '',
    visibility: 'public',
  });


  const video = useFileInputs(MAX_VIDEO_SIZE);
  const thumbnail =useFileInputs(MAX_THUMBNAIL_SIZE);;

  const [error, setError] = useState('');


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setformData((prevState) => ({ ...prevState, [name]: value }));

  }



  return (
    <div className='wrapper-md upload-page'>
      <h1>Upload a video</h1>

      {error && <div className="error-field">{error} </div>}

      <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5' onSubmit={handleSubmit}>
              <FormField 
                id='title'
                label='Title'
                placeholder='Enter a title for your video'
                value={formData.title}
                onChange={handleInputChange}
                

              />

              <FormField 
                id='description'
                label='description'
                placeholder='Enter a description for your video'
                value={formData.description}
                as='textarea'
                onChange={handleInputChange}
                

              />
              <FileInput 
                id='video'
                label='Video'
                accept='video/*'
                file={video.file}
                previewUrl={video.previewUrl}
                inputRef={video.inputRef}
                onChange={video.handleFileChange}
                onReset={video.resetFile}

                
            
              />

              <FileInput 
                id='thumbnail'
                label='Thumbnail'
                accept='image/*'
                file={thumbnail.file}
                previewUrl={thumbnail.previewUrl}
                inputRef={thumbnail.inputRef}
                onChange={thumbnail.handleFileChange}
                onReset={thumbnail.resetFile}
                type='image'
                
            
              />

              <FormField 
                id='visibility'
                label='visibility'
                value={formData.visibility}
                as='select'
                options={[
                  { label: 'Public', value: 'public' },
                  { label: 'Private', value: 'private' },
                ]}
                
                onChange={handleInputChange}
                

              />


              <button type='submit' disabled={isSubmitting} className='submit-button' >
                {isSubmitting ? 'Uploading...' : 'Upload video'}
              </button>
              
      </form>

    </div>
  )
}

export default Page
