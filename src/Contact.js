import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
  <h2 className="common-heading">Contact Us</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56054.57198759172!2d76.94709939603575!3d28.587452037221144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall%20(Dwarka%20Sector%20-%2014%2C%20Delhi)!5e0!3m2!1sen!2sin!4v1685709613843!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" title="abs"loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className="container">
  <div className="contact-form">
    <form action="https://formspree.io/f/xvonjgwb" method="POST" className="contact-inputs">
      <input type="text" placeholder="Username" name="username" required autoComplete="off"  />
      <input type="email" placeholder="Email" name="email" required autoComplete="off" />
      <textarea name="message" placeholder="Enter your Message" id="" cols="30" rows="10" required autoComplete="off"></textarea>
      <input type="submit" value="Send" />
    </form>
  </div>
</div>
  </Wrapper>
  );
};

export default Contact;
