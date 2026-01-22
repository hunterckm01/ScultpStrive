import { AssessmentSection } from '@/components/AssessmentSection'
import { EquipmentSection } from '@/components/EquipmentSection'
import React from 'react'

const Assessments = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <AssessmentSection/>
        <EquipmentSection />
      </main>
    </div>
  )
}

export default Assessments
