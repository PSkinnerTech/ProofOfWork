import { Linkedin as LinkedinIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function LinkedinProof() {
  return (
    <div className="w-[300px] p-4 border rounded-lg flex flex-col gap-3">
      <LinkedinIcon className="w-6 h-6" />
      
      <h3 className="text-lg font-semibold text-left">LinkedIn</h3>
      
      <Button>
        Connect LinkedIn
      </Button>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>LinkedIn Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between">
          <span>LinkedIn Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </div>
    </div>
  )
}