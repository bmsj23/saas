import React from 'react'
import { BookmarkIcon } from "lucide-react";
import { ClockIcon } from "lucide-react";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({id, name, topic, subject, duration, color} : CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor: color}}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className='companion-bookmark'>
          <BookmarkIcon />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm text-gray-700">{topic}</p>
      <div className="flex items-center gap-2">
        <ClockIcon />
        <span className="text-sm text-gray-500">{duration} mins duration</span>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className='btn-primary w-full justify-center'>View Session</button>
      </Link>

    </article>
  )
}

export default CompanionCard;
