import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FormSubmit,
  FooterLinksContainer,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = ({ data }) => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our Exclusive membership to recieve the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can Unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <FormSubmit primary>Subscribe</FormSubmit>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        {data.map((section) => (
          <FooterLinks>
            <FooterLinkTitle>{section.title}</FooterLinkTitle>
            {section.links.map((link) => (
              <FooterLink>{link}</FooterLink>
            ))}
          </FooterLinks>
        ))}
      </FooterLinksContainer>
      <SocialIcons>
        <SocialIconLink>
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink>
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink>
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink>
          <FaGithub />
        </SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
