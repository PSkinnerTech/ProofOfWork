import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"

export function GithubProof() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center gap-2">
        <FontAwesomeIcon 
          icon={faGithub} 
          className="w-6 h-6"
        />
        <h3 className="text-lg font-semibold">GitHub</h3>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-2">
        <Button>
          Connect GitHub
        </Button>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <span>GitHub Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>GitHub Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </CardFooter>
    </Card>
  )
}