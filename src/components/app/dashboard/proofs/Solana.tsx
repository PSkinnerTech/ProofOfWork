import { SimpleIconsSolana } from "@/components/icons/Solana"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function SolanaProof() {
  return (
    <div className="w-[300px] p-4 border rounded-lg flex flex-col gap-3">
      <SimpleIconsSolana 
        className="w-6 h-6"
      />
      
      <h3 className="text-lg font-semibold text-left">Solana</h3>
      
      <Button>
        Connect Wallet
      </Button>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>Wallet Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between">
          <span>Wallet Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </div>
    </div>
  )
}