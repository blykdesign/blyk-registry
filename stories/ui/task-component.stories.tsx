import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TaskComponent } from "@/registry/df-imoveis/components/ui/task-component"
import { Separator } from "@/registry/base/components/ui/separator"
import { User } from "lucide-react"

const meta = {
  title: "DF Imóveis/TaskComponent",
  component: TaskComponent,
  decorators: [
    (Story) => (
      <div className="max-w-[366px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TaskComponent>
export default meta
type Story = StoryObj<typeof meta>

export const Visita = {
  name: "Visita",
  args: {
    type: "visita" as const,
    timeSlot: {
      time: <span className="text-lg font-bold">14:00</span>,
      badge: "hoje",
    },
    title: "Marcos Oliveira",
    descriptions: [
      "SQS 308 Bloco A, Apartamento 302 - Asa Sul",
      "Asa Sul, Brasília - DF",
    ],
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: No
        </span>
        <TaskComponent
          type="visita"
          timeSlot={{
            time: (
              <span className="text-lg font-bold leading-none text-primary">
                14:00
              </span>
            ),
            badge: "hoje",
          }}
          title="Marcos Oliveira"
          descriptions={[
            "SQS 308 Bloco A, Apartamento 302 - Asa Sul",
            "Asa Sul, Brasília - DF",
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: Yes
        </span>
        <TaskComponent
          type="visita"
          done
          timeSlot={{
            time: (
              <span className="text-lg font-bold leading-none text-muted-foreground">
                14:00
              </span>
            ),
            badge: "hoje",
          }}
          title="Marcos Oliveira"
          descriptions={[
            "SQS 308 Bloco A, Apartamento 302 - Asa Sul",
            "Asa Sul, Brasília - DF",
          ]}
        />
      </div>
    </div>
  ),
}

function InteractiveTarefa({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [checked, setChecked] = React.useState(defaultChecked)
  return (
    <TaskComponent
      type="tarefa"
      done={checked}
      checked={checked}
      onCheckedChange={setChecked}
      badge="Urgente"
      badgeVariant="secondary"
      title="Ligar para o lead"
      meta={[
        "Hoje, 15:00",
        <Separator key="sep" orientation="vertical" className="!h-5" />,
        <>
          <User className="size-4" />
          Ana Carolina
        </>,
      ]}
    />
  )
}

export const Tarefa = {
  name: "Tarefa",
  args: {
    type: "tarefa" as const,
    badge: "Urgente",
    badgeVariant: "secondary" as const,
    title: "Ligar para o lead",
    meta: ["Hoje, 15:00"],
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: No
        </span>
        <TaskComponent
          type="tarefa"
          badge="Urgente"
          badgeVariant="secondary"
          title="Ligar para o lead"
          meta={[
            "Hoje, 15:00",
            <Separator key="sep" orientation="vertical" className="!h-5" />,
            <>
              <User className="size-4" />
              Ana Carolina
            </>,
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: Yes
        </span>
        <TaskComponent
          type="tarefa"
          done
          checked
          badge="Urgente"
          badgeVariant="secondary"
          title="Ligar para o lead"
          meta={[
            "Hoje, 15:00",
            <Separator key="sep" orientation="vertical" className="!h-5" />,
            <>
              <User className="size-4" />
              Ana Carolina
            </>,
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Interactive — click the checkbox
        </span>
        <InteractiveTarefa />
      </div>
    </div>
  ),
}
