import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,

    WhatsappShareButton,

} from "react-share";

import { BsTwitter } from "react-icons/bs"

export const SocialShare = () => {
    return (

        <TwitterShareButton
            url={"https://love.com "}
            title={"title"}
            className="Demo__some-network__share-button">
            < BsTwitter color="blue" size={30} />
        </TwitterShareButton>
    )
}
