export type BlogType = {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  url: string;
};

export default class BlogService {
  private static readonly data: BlogType[] = [
    {
      id: 1,
      title: '프론트엔드 면접을 대비하여 지식 요약1 (Programming용어 관련)',
      thumbnail:
        'https://i1.daumcdn.net/thumb/C300x300.fwebp.q85/?fname=https://blog.kakaocdn.net/dn/SbU13/btrvBkHGdU1/3gj4iDeetA6GmCgobhvW7K/img.jpg',
      date: '2022. 3. 7.',
      url: 'https://ji-u.tistory.com/42',
    },
    {
      id: 1,
      title: '프론트엔드 면접을 대비하여 지식 요약2(JavaScript 관련)',
      thumbnail:
        'https://i1.daumcdn.net/thumb/C300x300.fwebp.q85/?fname=https://blog.kakaocdn.net/dn/dl1Mfw/btrvxkhzxxU/eCL90iBWsDjU5AqRFV1c31/img.jpg',
      date: '2022. 3. 10.',
      url: 'https://ji-u.tistory.com/43',
    },
    {
      id: 1,
      title: '프론트엔드 면접을 대비하여 지식 요약3 (Network 관련)',
      thumbnail:
        'https://i1.daumcdn.net/thumb/C300x300.fwebp.q85/?fname=https://blog.kakaocdn.net/dn/bRqsrr/btrvwji412B/909dWnmagxNXnWTX7Rgdv0/img.jpg',
      date: '2022. 3. 10.',
      url: 'https://ji-u.tistory.com/44',
    },
    {
      id: 1,
      title: 'Lv.2 - 다리를 지나는 트럭 (스택/큐)',
      thumbnail:
        'https://i1.daumcdn.net/thumb/C300x300.fwebp.q85/?fname=https://blog.kakaocdn.net/dn/bYAwhF/btrvMdPeCBA/dat04aox36eiIkDp1bTAxK/img.jpg',
      date: '2022. 3. 13.',
      url: 'https://ji-u.tistory.com/45',
    },
    {
      id: 1,
      title: '[소프트웨어공학] 소프트웨어 생명주기(SDLC)',
      thumbnail: '',
      date: '2024. 10. 23.',
      url: 'https://ji-u.tistory.com/46',
    },
    {
      id: 1,
      title: '[소프트웨어공학] 애자일 방법론(Agile Development)',
      thumbnail: '',
      date: '2024. 10. 23.',
      url: 'https://ji-u.tistory.com/47',
    },
  ];

  static getData() {
    return BlogService.data;
  }
}
