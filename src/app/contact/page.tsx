'use client';
import React, { useState } from 'react';
import PageContainer from '@/common/components/layout/PageContainer';
import { Title } from '@/common/components';
import styled from 'styled-components';
import { MailType } from '@/lib/nodemailer';
import { sendContactEmail } from '@/common/services/sendmail';
import { PiChatsCircleBold } from 'react-icons/pi';

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh);
  background: url('/assets/images/contact_bg.jpg');
  background-size: cover;
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.color.bg};
  }

  @media screen and (max-width: 460px) {
    min-height: auto;
    padding: 80px 20px 160px;
  }
`;
const Contents = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: ${({ theme }) => `${theme.color.bg}DE`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px;
  align-items: center;
  gap: 16px;
  width: fit-content;
  max-width: 1200px;
  font-size: 1rem;

  @media screen and (max-width: 460px) {
    padding: 40px;
    width: 100%;
    background-color: ${({ theme }) => `${theme.color.bg}aa`};
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.color.description};
  margin-bottom: 4px;
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 8px 4px;
  border-bottom: 2px solid ${({ theme }) => theme.color.description};
  transition: all 0.4s;
  color: ${({ theme }) => theme.color.title01};
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => `${theme.color.bg}9E`};
    border-bottom: 2px solid ${({ theme }) => theme.color.blue};
  }
`;
const TextArea = styled.textarea`
  height: 80px;
  background: none;
  outline: none;
  transition: all 0.4s;
  color: ${({ theme }) => theme.color.title01};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: 8px 4px;
  border: 2px solid ${({ theme }) => theme.color.description};

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => `${theme.color.bg}9E`};
    border: 2px solid ${({ theme }) => theme.color.blue};
  }
`;
const KaKaoButton = styled.a`
  position: absolute;
  bottom: -80px;
  width: 180px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.color.orenge};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: 16px;
  color: ${({ theme }) => theme.color.title01};
`;
const SendButton = styled.button<{ loading?: boolean }>`
  width: 100%;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => theme.color.blue};
  padding: 16px;
  color: ${({ theme }) => `${theme.color.white}`};
  cursor: ${({ loading }) => (loading ? 'wait' : 'pointer')};
`;
function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mail, setMail] = useState<MailType>({
    subject: '',
    sender: '',
    text: '',
  });

  const handleMail = (id: keyof MailType, text: string) => {
    if (!text || text == '') {
      return;
    }

    setMail((prev) => ({
      ...prev,
      [id]: text,
    }));
  };
  const sendButton = async () => {
    setIsLoading(true);
    try {
      await sendContactEmail(mail);
      alert('메일 전송이 완료되었습니다.');
      setMail(() => ({ subject: '', sender: '', text: '' }));
    } catch (error) {
      console.log(error);
      alert('메일 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PageContainer>
      <Container>
        <Contents>
          <Title>{`Let's connect.`}</Title>

          <Label htmlFor="subject">
            제목
            <Input
              id="subject"
              onChange={(e) => handleMail('subject', e.target.value)}
            />
          </Label>
          <Label htmlFor="sender">
            수신자
            <Input
              id="sender"
              onChange={(e) => handleMail('sender', e.target.value)}
            />
          </Label>
          <Label htmlFor="text">
            내용
            <TextArea
              id="text"
              onChange={(e) => handleMail('text', e.target.value)}
            />
          </Label>
          <SendButton
            onClick={sendButton}
            disabled={isLoading}
            loading={isLoading}
          >
            보내기
          </SendButton>
          <KaKaoButton
            href="https://open.kakao.com/o/s8Usjc1d"
            target="_blank"
            rel="noreferrer"
          >
            오픈채팅 방문하기 <PiChatsCircleBold />
          </KaKaoButton>
        </Contents>
      </Container>
    </PageContainer>
  );
}

export default Contact;
