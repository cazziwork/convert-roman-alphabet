const ConvHelper = require('../creates/conv-helper');

test('ヘボン式ローマ字変換テスト', async () => {
  const result = await ConvHelper.conv2hepburn('りょう');
  await expect(result).toMatchObject({roman: 'ryo'});
});
