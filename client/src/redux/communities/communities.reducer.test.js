import communitiesReducer from './communities.reducer';
import CommunitiesActionTypes from './communities.action-types';

const INITIAL_STATE = {
    communities: null,
    averages: null
}

describe('communitiesReducer', () => {
    it('should return the initial state', () => {
      expect(communitiesReducer(undefined, {})).toMatchSnapshot()
    })
  
    it('should handle FETCH_COMMUNITIES', () => {
    const mockItems = [
        {
        "id": "56e20c00-805b-44b7-831f-f33e50edd54e",
        "name": "Bowness",
        "imgUrl": "https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg",
        "group": "North West"
        },
        {
        "id": "20244d9f-8147-4633-9b29-4c0ec5a762a9",
        "name": "Varsity",
        "imgUrl": "https://www.bwalk.com/media/4883/varsitysq1-rimyreehal2017-16.jpg?anchor=center&mode=crop&width=768&height=350&rnd=132114728500000000",
        "group": "North West"
        },
        {
        "id": "af2c8ca7-e3bb-4c8f-8f40-1f6156f4d7c4",
        "name": "Mountview - Winston Heights in North East Calgary",
        "imgUrl": "https://www.daniyalnasiri.com/uploads/agent-1738/calgary-aerial.jpg",
        "group": "North East"
        },
        {
        "id": "1f161dcd-1221-4b0f-9ced-1498807cca55",
        "name": "Auburn Bay",
        "imgUrl": "https://www.brookfieldresidential.com/-/media/brp/alberta/calgary-and-area/calgary/auburn-bay/community-images/auburn-bay-lake-sunset-dock-brookfield-residential.jpg?h=1000&w=1600&la=en&hash=9D01761DA6F423AE008124B4A116D0182FF297D0",
        "group": "South East"
        },
        {
        "id": "7fccecd9-d246-4681-84e9-a92861999c20",
        "name": "Seton",
        "imgUrl": "https://www.brookfieldresidential.com/-/media/brp/alberta/calgary-and-area/calgary/seton/community-images/business-district-seton-calgary-alberta.jpg?h=1000&w=1062&la=en&hash=0FFD97F5384CD9825FCBB8C5775C92976D36C9CE",
        "group": "South East"
        },
        {
        "id": "f5796140-887c-4cf0-b301-f96f3f4fc275",
        "name": "Eau Claire",
        "imgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0d/c8/f0/d5/photo0jpg.jpg",
        "group": "South West"
        },
        {
        "id": "a75e7343-23f3-45c4-a1a4-e88746b11ebf",
        "name": "Oakridge",
        "imgUrl": "",
        "group": "South West"
        },
        {
        "id": "84666941-c1b9-43a8-82a0-dbc3a82862c4",
        "name": "Mahogany",
        "imgUrl": "https://www.hopewellsandgate.com/img/website/content/about-mahogany/lakes-beaches.jpg",
        "group": "South East"
        },
        {
        "id": "29c7292d-c04b-49c4-acd6-a1a8de952408",
        "name": "Brentwood",
        "imgUrl": "https://images.century21.ca/Listings/MLS/56/C3604827/7D98BABD152205473DF0A10FEC1B6526.Jpg?width=650&height=487&scale=both&lang=en-CA",
        "group": "North West"
        },
        {
        "id": "86b42a15-1a35-4819-8646-6719ea275ecf",
        "name": "Rosedale",
        "imgUrl": "https://calgary.newinfills.ca/media/original/rosedale-calgary-newinfills.jpg",
        "group": "North West"
        }
        ];
      expect(
        communitiesReducer(INITIAL_STATE,
        {
          type: CommunitiesActionTypes.FETCH_COMMUNITIES,
          payload: mockItems
        })
      ).toEqual({
        ...INITIAL_STATE,
        communities: mockItems
      });
    });


    it('should handle FETCH_AVERAGE', () => {
        const mockItems = [
          {
          "id": "56e20c00-805b-44b7-831f-f33e50edd54e",
          "averagePrice": 400000
          },
          {
          "id": "d24af356-a2b4-4c98-be10-329a3d9edac2",
          "averagePrice": 943595
          },
          {
          "id": "1f161dcd-1221-4b0f-9ced-1498807cca55",
          "averagePrice": 333334
          },
          {
          "id": "84666941-c1b9-43a8-82a0-dbc3a82862c4",
          "averagePrice": 572670
          },
          {
          "id": "a75e7343-23f3-45c4-a1a4-e88746b11ebf",
          "averagePrice": 685965
          },
          {
          "id": "86b42a15-1a35-4819-8646-6719ea275ecf",
          "averagePrice": 768960
          },
          {
          "id": "7fccecd9-d246-4681-84e9-a92861999c20",
          "averagePrice": 500000
          },
          {
          "id": "af2c8ca7-e3bb-4c8f-8f40-1f6156f4d7c4",
          "averagePrice": 399000
          },
          {
          "id": "20244d9f-8147-4633-9b29-4c0ec5a762a9",
          "averagePrice": 354430
          }
          ];
          expect(
            communitiesReducer(INITIAL_STATE,
            {
              type: CommunitiesActionTypes.FETCH_AVERAGE,
              payload: mockItems
            })
          ).toEqual({
            ...INITIAL_STATE,
            averages: mockItems
          });
        })
});