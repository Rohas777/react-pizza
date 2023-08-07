import { FC } from "react"
import ContentLoader from "react-content-loader"

export const Skeleton: FC = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="139" cy="120" r="120" />
        <rect x="5" y="270" rx="5" ry="5" width="270" height="24" />
        <rect x="5" y="320" rx="5" ry="5" width="270" height="85" />
        <rect x="120" y="418" rx="20" ry="20" width="155" height="40" />
        <rect x="5" y="430" rx="5" ry="5" width="90" height="27" />
    </ContentLoader>
)

