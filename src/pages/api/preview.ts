/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default async (_, res) => {
  res.clearPreviewData();

  res.write.Head(307, { Location: '/' });
  res.end();
};
