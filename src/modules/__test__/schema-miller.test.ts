import SchemaMiller from '../../helpers/schema-miller'
import { Node, Directory } from '@textile/go-mobile'
import response from './__static__/simple.json'

const hash = 'Qmabcdddklsfdklsdflksdf34523lkssddlfk23lk43'

describe('simple schema', () => {
  it('should be sorted by dependencies', () => {
    const node = Node.fromObject(response)
    const sorted = SchemaMiller.sortLinksByDependency(node.links)

    expect(sorted[2].Name).toEqual('thumb')
  })

  it.skip('should have normalized options', () => {
    const { links: { thumb } } = response
    const node = Node.fromObject(thumb)
    const normalized = SchemaMiller.normalizeOptions(node.opts)

    expect(normalized.opts.pin).toEqual(true)
    expect(normalized.opts.plaintext).toEqual(false)
  })

  it('should have resolved use', () => {
    const { links: { large, thumb } } = response
    const payloadsByName = Directory.fromObject({ files: { large: { hash } } })

    const resolvedOne = SchemaMiller.resolveDependency(large, payloadsByName)
    const resolvedTwo = SchemaMiller.resolveDependency(thumb, payloadsByName)

    expect(resolvedOne.opts.use).toEqual('')
    expect(resolvedTwo.opts.use).toEqual(hash)
  })
})
