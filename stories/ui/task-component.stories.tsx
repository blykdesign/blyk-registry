import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  TaskComponent,
  TaskComponentTimeSlot,
  TaskComponentCheckbox,
  TaskComponentContent,
  TaskComponentBadge,
  TaskComponentTitle,
  TaskComponentDescription,
  TaskComponentMeta,
  TaskComponentMetaItem,
} from "@/registry/df-imoveis/components/ui/task-component"
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

/* ── Visita ────────────────────────────────────────────── */

export const Visita: Story = {
  name: "Visita",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: No
        </span>
        <TaskComponent type="visita">
          <TaskComponentTimeSlot>
            <span className="text-lg font-bold leading-none text-primary">
              14:00
            </span>
            <TaskComponentBadge>hoje</TaskComponentBadge>
          </TaskComponentTimeSlot>
          <TaskComponentContent>
            <TaskComponentTitle>Marcos Oliveira</TaskComponentTitle>
            <TaskComponentDescription>
              SQS 308 Bloco A, Apartamento 302 - Asa Sul
            </TaskComponentDescription>
            <TaskComponentDescription className="font-normal">
              Asa Sul, Brasília - DF
            </TaskComponentDescription>
          </TaskComponentContent>
        </TaskComponent>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: Yes
        </span>
        <TaskComponent type="visita" done>
          <TaskComponentTimeSlot>
            <span className="text-lg font-bold leading-none text-muted-foreground">
              14:00
            </span>
            <span className="text-xs font-medium leading-normal text-muted-foreground">
              hoje
            </span>
          </TaskComponentTimeSlot>
          <TaskComponentContent>
            <TaskComponentTitle className="text-muted-foreground">
              Marcos Oliveira
            </TaskComponentTitle>
            <TaskComponentDescription>
              SQS 308 Bloco A, Apartamento 302 - Asa Sul
            </TaskComponentDescription>
            <TaskComponentDescription className="font-normal">
              Asa Sul, Brasília - DF
            </TaskComponentDescription>
          </TaskComponentContent>
        </TaskComponent>
      </div>
    </div>
  ),
}

/* ── Tarefa ────────────────────────────────────────────── */

function InteractiveTarefa({
  defaultChecked = false,
}: {
  defaultChecked?: boolean
}) {
  const [checked, setChecked] = React.useState(defaultChecked)
  return (
    <TaskComponent type="tarefa" done={checked}>
      <TaskComponentCheckbox checked={checked} onCheckedChange={setChecked} />
      <TaskComponentContent>
        <TaskComponentBadge variant="secondary">Urgente</TaskComponentBadge>
        <TaskComponentTitle
          className={checked ? "text-muted-foreground" : undefined}
        >
          Ligar para o lead
        </TaskComponentTitle>
        <TaskComponentMeta>
          <TaskComponentMetaItem>Hoje, 15:00</TaskComponentMetaItem>
          <Separator orientation="vertical" className="!h-5" />
          <TaskComponentMetaItem>
            <User className="size-4" />
            Ana Carolina
          </TaskComponentMetaItem>
        </TaskComponentMeta>
      </TaskComponentContent>
    </TaskComponent>
  )
}

export const Tarefa: Story = {
  name: "Tarefa",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: No
        </span>
        <TaskComponent type="tarefa">
          <TaskComponentCheckbox />
          <TaskComponentContent>
            <TaskComponentBadge variant="secondary">
              Urgente
            </TaskComponentBadge>
            <TaskComponentTitle>Ligar para o lead</TaskComponentTitle>
            <TaskComponentMeta>
              <TaskComponentMetaItem>Hoje, 15:00</TaskComponentMetaItem>
              <Separator orientation="vertical" className="!h-5" />
              <TaskComponentMetaItem>
                <User className="size-4" />
                Ana Carolina
              </TaskComponentMetaItem>
            </TaskComponentMeta>
          </TaskComponentContent>
        </TaskComponent>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Done: Yes
        </span>
        <TaskComponent type="tarefa" done>
          <TaskComponentCheckbox checked />
          <TaskComponentContent>
            <TaskComponentBadge variant="secondary">
              Urgente
            </TaskComponentBadge>
            <TaskComponentTitle className="text-muted-foreground">
              Ligar para o lead
            </TaskComponentTitle>
            <TaskComponentMeta>
              <TaskComponentMetaItem>Hoje, 15:00</TaskComponentMetaItem>
              <Separator orientation="vertical" className="!h-5" />
              <TaskComponentMetaItem>
                <User className="size-4" />
                Ana Carolina
              </TaskComponentMetaItem>
            </TaskComponentMeta>
          </TaskComponentContent>
        </TaskComponent>
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
