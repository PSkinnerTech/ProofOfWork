import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function GithubProof() {
  return (
    <div className="w-[300px] p-4 border rounded-lg flex flex-col gap-3">
      <FontAwesomeIcon 
        icon={faGithub} 
        className="w-6 h-6"
      />
      
      <h3 className="text-lg font-semibold text-left">GitHub</h3>
      
      <Button>
        Connect GitHub
      </Button>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>GitHub Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between">
          <span>GitHub Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </div>
    </div>
  )
}