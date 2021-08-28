describe('Website', function() {
    it('should be alive alive', function() {
        browser.url('/')
        const img = $('img[src="https://static.litecart.net/storage/images/logotype_light.svg"]')
        expect(img.isExisting(), 'Website should be opened, and logo displayed').to.be.true
    })
})