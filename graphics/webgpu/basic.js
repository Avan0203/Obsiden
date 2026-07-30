/*
 * @Author: wuyifan wuyifan@udschina.com
 * @Date: 2026-07-29 17:15:06
 * @LastEditors: wuyifan wuyifan@udschina.com
 * @LastEditTime: 2026-07-29 17:15:50
 * @FilePath: \Obsiden\graphics\webgpu\basic.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
async function main() {
  // 1. 获取GPU设备
  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) {
    fail("need a browser that supports WebGPU");
    return;
  } else {
    console.log(device);
    console.log("WebGPU is supported");
  }

  // 2. 创建上下文
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("webgpu");

  // "rgba8unorm"	R-G-B-A 顺序，每通道 8bit，unsigned normalized
  // "bgra8unorm"	B-G-R-A 顺序，每通道 8bit，unsigned normalized
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  // 绑定设备
  context.configure({
    device,
    format: presentationFormat,
  });

  const module = device.createShaderModule({
    label: "our hardcoded red triangle shaders",
    code: /* wgsl */ `
             @vertex fn vs(
               @builtin(vertex_index) vertexIndex : u32
             ) -> @builtin(position) vec4f {
               let pos = array(
                 vec2f( 0.0,  0.5),  // top center
                 vec2f(-0.5, -0.5),  // bottom left
                 vec2f( 0.5, -0.5)   // bottom right
               );

               return vec4f(pos[vertexIndex], 0.0, 1.0);
             }

             @fragment fn fs() -> @location(0) vec4f {
               return vec4f(1.0, 0.0, 0.0, 1.0);
             }`,
  });
}
main();
