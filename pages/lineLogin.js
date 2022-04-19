/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import dynamic from 'next/dynamic'

function Profile() {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    const profile = await liff.getProfile()
    setProfile(profile)
  }, [profile.userId])

  return (
      <Layout>
        <title>My Profile</title>
      <h1>Profile</h1>
      <div>
        {profile.pictureUrl && <Image
          src={profile.pictureUrl}
          alt={profile.displayName}
          width={500}
          height={500}
        />}
        <div>Name: {profile.displayName}</div>
      </div>
</Layout>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });