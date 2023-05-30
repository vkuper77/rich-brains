type SelectType = {
    name: string,
    id: number,
}

export const COUNTRY: SelectType[] = [
	{name: 'Albania', id: 1},
	{name: 'Andorra', id: 2},
	{name: 'Austria', id: 3},
	{name: 'Belarus', id: 4},
	{name: 'Belgium', id: 5},
	{name: 'Bosnia and Herzegovina', id: 6},
	{name: 'Bulgaria', id: 7},
	{name: 'Croatia', id: 8},
	{name: 'Cyprus', id: 9},
	{name: 'Czech Republic', id: 10},
	{name: 'Denmark', id: 11},
	{name: 'Estonia', id: 12},
	{name: 'Finland', id: 13},
	{name: 'France', id: 14},
	{name: 'Germany', id: 15},
	{name: 'Greece', id: 16},
	{name: 'Hungary', id: 17},
	{name: 'Iceland', id: 18},
	{name: 'Ireland', id: 19},
	{name: 'Italy', id: 20},
	{name: 'Kosovo', id: 21},
	{name: 'Latvia', id: 22},
	{name: 'Liechtenstein', id: 23},
	{name: 'Lithuania', id: 24},
	{name: 'Luxembourg', id: 25},
	{name: 'Malta', id: 26},
	{name: 'Moldova', id: 27},
	{name: 'Monaco', id: 28},
	{name: 'Montenegro', id: 29},
	{name: 'Netherlands', id: 30},
	{name: 'North Macedonia', id: 31},
	{name: 'Norway', id: 32},
	{name: 'Poland', id: 33},
	{name: 'Portugal', id: 34},
	{name: 'Romania', id: 35},
	{name: 'San Marino', id: 36},
	{name: 'Serbia', id: 37},
	{name: 'Slovakia', id: 38},
	{name: 'Slovenia', id: 39},
	{name: 'Spain', id: 40},
	{name: 'Sweden', id: 41},
	{name: 'Switzerland', id: 42},
	{name: 'Ukraine', id: 43},
	{name: 'United Kingdom', id: 44},
	{name: 'Vatican City', id: 45}
]

export const TEL_DATA:SelectType[] = [{name: 'Tel', id: 1}, {name: 'Mob', id: 2}]

export const MAX_DATE = new Date()
MAX_DATE.setFullYear(MAX_DATE.getFullYear() - 1, MAX_DATE.getDay(),MAX_DATE.getDate() - 1)
