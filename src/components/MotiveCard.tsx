interface MotiveCardProps {
    heading: string,
    description: string,
    // icon: Icon
}

export const MotiveCard = ({
    heading, description
}: MotiveCardProps) => {
    return (
        <div className="cursor-pointer hover:shadow-glow  transition-all duration-300 flex flex-col gap-4 border border-border/30 bg-card py-4 sm:py-8 px-5 rounded-md shadow-lg hover:border-primary/50 ">
            <div>
                <h2 className="text-2xl font-bold">{heading}</h2>
            </div>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}