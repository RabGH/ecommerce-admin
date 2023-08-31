"use client"

import { Store } from "@prisma/client"

interface SettingsFormProps {
    initialData: Store
}

export const SettingsForm: React.FC<SettingsFormProps> = () => {
    return (
        <div>
            Settings Form
        </div>
    )
}