import { API } from '@/app/api'
import { TopPage } from '@/interfaces/page.interface'

export async function getPage(alias: string): Promise<TopPage | null> {
	const res = await fetch(API.topPage.byAlias + alias)
	if (!res.ok) {
		return null
	}
	return res.json()
}
