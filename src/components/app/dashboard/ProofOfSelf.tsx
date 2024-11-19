import { LinkedinProof } from "./proofs/Linkedin"
import { XProof } from "./proofs/X"
import { GithubProof } from "./proofs/Github"
import { EthereumProof } from "./proofs/Ethereum"
import { SolanaProof } from "./proofs/Solana"
import { ArweaveProof } from "./proofs/Arweave"

export function ProofOfSelf() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="py-3">
        <LinkedinProof />
      </div>
      <div className="py-3">
        <XProof />
      </div>
      <div className="py-3">
        <GithubProof />
      </div>
      <div className="py-3">
        <EthereumProof />
      </div>
      <div className="py-3">
        <SolanaProof />
      </div>
      <div className="py-3">
        <ArweaveProof />
      </div>
    </div>
  )
}