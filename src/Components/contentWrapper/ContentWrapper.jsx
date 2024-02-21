import { Children } from "react"

const ContentWrapper = ({ className }) => {
    return (
        <div className={className}>
            {Children}
        </div>
    )
}

export default ContentWrapper