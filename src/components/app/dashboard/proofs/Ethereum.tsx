import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"

export function EthereumProof() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center gap-2">
        <FontAwesomeIcon 
          icon={faEthereum} 
          className="w-6 h-6"
        />
        <h3 className="text-lg font-semibold">Ethereum</h3>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-2">
        <Button>
          Connect Wallet
        </Button>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <span>Wallet Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>Wallet Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </CardFooter>
    </Card>
  )
}