import { useId } from "react"
import { MailIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputEmailProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputEmail({ value, onChange }: InputEmailProps) {
  const id = useId()

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Correo Electrónico</Label>
      <div className="relative">
        <Input
          id={id}
          value={value}
          onChange={onChange}
          className="peer pe-9"
          placeholder="Email"
          type="email"
          required
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <MailIcon size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

