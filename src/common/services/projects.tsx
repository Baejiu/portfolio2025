type LinkType = {
  type: 'site' | 'git';
  url: string;
};
export type ProjectType = {
  id: number;
  category: string;
  title: string;
  brief: string;
  thumbnail: string;
  tags: string;
  links: LinkType[];
  date: string;
  position: string;
  detail: string;
};

export default class ProiectService {
  private static readonly data: ProjectType[] = [
    {
      id: 1,
      category: 'site',
      title: '비대면 비영리 회계 솔루션 로켓회계',
      brief:
        '간편하게 가입하고, 비대면 카톡으로 진행되는 회계 프로그램 홈페이지를 제작했습니다. 젊은 층의 가입을 유도하기 위해 저렴한 가격과 비대면 시스템을 요청했고, 웹사이트 기획과 디자인, 구현까지 진행했습니다. 문의게시판의 api와 콘솔창 이후의 데이터 불러오는 영역은 백엔드가 진행하고, 그 외 작업은 javascript로 진행했습니다.',
      thumbnail: '/assets/images/projects/ra.jpg',
      tags: 'javascript,responsive,design,landing page',
      links: [],
      date: '2020.03-2020.05',
      position: '기획,디자인,프론트엔드',
      detail: ``,
    },
    {
      id: 2,
      category: 'site',
      title: '디자이너그룹 3FS 홈페이지',
      brief:
        '"하고싶은거 있어. 품고만 있지 말고 한번 해보자" 디자이너 그룹 쓰리포크즈가 전하는 메세지입니다. 쓰리포크즈 홈페이지는 6개월의 국비지원 학원을 수료하고 얼마 되지 않은 상태에서 제작해서 단순한 형태로 하드코딩되어있습니다. 홈페이지의 그림을 보고 있으면 하고싶은 것, 꿈을 잊지 않기 위한 다짐, 본업에도 충실하며 조금씩 자신을 위한 시간을 낼 수 있는 용기를 줍니다.',
      thumbnail: '/assets/images/projects/fs2.jpg',
      tags: 'javascript,responsive',
      links: [
        {
          type: 'site',
          url: 'http://3fs-plus.com/',
        },
      ],
      date: '2020.02',
      position: 'front-end, 도메인 관리',
      detail: ``,
    },
    {
      id: 3,
      category: 'site',
      title: '(주)굿케어 홈페이지 리뉴얼',
      brief:
        '입사 당시 사업 분야이 따라 4개의 개별적인 홈페이지가 연결되어 있는 형태였습니다. 회사의 수상, 활동, 업무, 세미나 등 다양한 현물 사진이 있음에도 노출되고 있지 않는 상태로 확인되어 회사의 장점을 부각할 수 있도록 기획되었습니다. 다양한 인력군 보유, 내부 교육, 수상, 활동 등을 취합하고 하나로 통합해 리뉴얼했습니다.',
      thumbnail: '/assets/images/projects/gd.jpg',
      tags: 'javascript,responsive,기획,디자인,프로젝트 구축',
      links: [
        {
          type: 'site',
          url: 'http://goodcare.me/',
        },
      ],
      date: '2020.04 - 2020.12',
      position: '기획,front-end',
      detail: ``,
    },
    {
      id: 4,
      category: 'web program',
      title: '굿케어 솔루션 사회서비스 웹프로그램',
      brief:
        '기존 프로그램은 하드코딩되어있었고 재사용성이 떨어졌습니다. 또한 유지보수가 용이하지 않았고, 하나의 페이지에 많은 veiw와 data에 관련된 함수들, 정보들이 저장되어 있었습니다. react 도입으로 속도를 향상시켰고 30개가 넘는 페이지수와 회계, 급여, 관리자페이지, 회원정보 등의 메뉴를 가지고 있습니다.',
      thumbnail: '/assets/images/projects/gs.jpg',
      tags: 'react,javascript,responsive,api,sql',
      links: [
        {
          type: 'site',
          url: 'https://goodcare.info/',
        },
      ],
      date: '2021.02 - 2022.02',
      position: 'front-end',
      detail: ``,
    },
    {
      id: 5,
      category: 'portfolio',
      title: '2022 portfolio',
      brief: '2022년 작업한 포트폴리오입니다',
      thumbnail: '/assets/images/projects/jp2022.jpg',
      tags: 'react,javascript,responsive',
      links: [
        {
          type: 'site',
          url: 'http://baejiu.dothome.co.kr/',
        },
      ],
      date: '2022.01 - 2022.03',
      position: 'front-end',
      detail: ``,
    },
  ];

  static getData(category: string = 'all', tags: string[] = []) {
    if (category == 'all' && tags.length == 0) {
      return ProiectService.data;
    }

    return ProiectService.data
      .filter((item) => item.category == category)
      .filter((item) => tags.filter((tag) => item.tags.includes(tag)));
  }
  static getCategories(): string[] {
    const categorySet: Set<string> = new Set();
    categorySet.add('all');
    ProiectService.data.forEach((item) => categorySet.add(item.category));
    return Array.from(categorySet);
  }
  static getTags(): string[] {
    const tags: Set<string> = new Set();
    ProiectService.data.forEach((item) => {
      const tagArray = item.tags.split(',');
      tagArray.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }
}
