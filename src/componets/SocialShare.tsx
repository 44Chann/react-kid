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
    TwitterIcon,
    FacebookIcon,
    TelegramIcon,
    LinkedinIcon,
    EmailIcon,
    InstapaperIcon,
    LineIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    RedditIcon,
    WhatsappIcon
} from "react-share";

import { BsTwitter } from "react-icons/bs"

interface Props {
    url: any
    title: any
    text: any

}


export const SocialShare = ({ url, title, text }: Props) => {
    return (
        <div className="flex flex-wrap items-center">
            <TwitterShareButton
                url={url}
                title={title}
                className="Demo__some-network__share-button">
                <TwitterIcon size={72} round />
            </TwitterShareButton>
            <EmailShareButton url={url}
                title={title} >
                <EmailIcon round
                />
            </EmailShareButton>
            <FacebookShareButton
                url={url}
                title={title}
            >
                <FacebookIcon round />
            </FacebookShareButton>
            <InstapaperShareButton
                url={url}
                title={title}
            >
                <InstapaperIcon round />
            </InstapaperShareButton>
            <LineShareButton
                url={url}
                title={title}
            >
                <LineIcon round />
            </LineShareButton>
            <LinkedinShareButton
                url={url}
                title={title}
            >
                <LinkedinIcon round />
            </LinkedinShareButton>
            <MailruShareButton
                url={url}
                title={title}
            >
                <MailruIcon round />
            </MailruShareButton>
            <OKShareButton
                url={url}
                title={title}
            >
                <OKIcon round />
            </ OKShareButton>
            <RedditShareButton
                url={url}
                title={title}
            >
                <RedditIcon round />
            </ RedditShareButton>
            <TelegramShareButton
                url={url}
                title={title}
            >
                <TelegramIcon round />
            </ TelegramShareButton>
            <WhatsappShareButton
                url={url}
                title={title}
            >
                <WhatsappIcon round />
            </WhatsappShareButton>

        </div >

    )
}
