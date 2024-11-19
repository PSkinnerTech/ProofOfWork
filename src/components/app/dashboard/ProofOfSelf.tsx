import { LinkedinProof } from "./proofs/Linkedin"

export function ProofOfSelf() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <LinkedinProof />
      {/* Other proof components will go here */}
    </div>
  )
}