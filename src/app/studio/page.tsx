'use client';
import clsx from 'clsx';
import Page from '@/components/content-layout/Page';
import { ITableOfContentsItem } from '@/interfaces/common';
import TableOfContents from '@/components/TableOfContents';

export default function Studio() {
  const tableOfContents: ITableOfContentsItem[] = [
    {
      title: 'Computer',
      depth: 1,
      slug: 'computer',
    },
    {
      title: 'Display',
      depth: 1,
      slug: 'display',
    },
    {
      title: 'Keyboard',
      depth: 1,
      slug: 'keyboard',
    },
    {
      title: 'Mouse',
      depth: 1,
      slug: 'mouse',
    },
    {
      title: 'Audio Devices',
      depth: 1,
      slug: 'audio-devices',
    },
    {
      title: 'Others',
      depth: 1,
      slug: 'others',
    },
  ];

  return (
    <Page
      title="Studio"
      description="A home workspace and entertainment area that helps me connect with friends and complete work efficiently."
    >
      <div
        className={clsx(
          'content-wrapper flex-shrink-0 overflow-hidden lg:overflow-visible'
        )}
        data-accent="blue"
      >
        <div className={clsx('flex flex-row-reverse gap-8 xl:gap-24')}>
          <div className={clsx('-mt-48 hidden', 'lg:block')}>
            <div
              className={clsx(
                'sticky top-24 z-[901] w-64',
                'xl:w-[272px]',
                'fm:relative fm:top-0'
              )}
            >
              <TableOfContents items={tableOfContents} />
            </div>
          </div>
          <div className={clsx('page-contents')}>
            <h2
              id="computer"
              data-ss="computer"
              className={clsx('heading heading-h2')}
            >
              Computer
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>OS</td>
                  <td>Windows 11 Home 64-bit</td>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>AMD Ryzen 7 5700X</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>32GB 3200MHz DDR4</td>
                </tr>
                <tr>
                  <td>GPU</td>
                  <td>RTX 5060 8GB GDDR7</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>
                    NVMe M.2 512GB Gen3x4
                    <br/>
                    NVMe M.2 1TB Gen4x4
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <h2 className={clsx('heading heading-h3')}>Support Device</h2>
            <p>Apple MacBook Air M4 2025 16GB 256GB</p>
            <hr className={clsx('divider')} />
            <h2
              id="display"
              data-ss="display"
              className={clsx('heading heading-h2')}
            >
              Display
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Model</td>
                  <td>Dell UltraSharp U2424HE</td>
                </tr>
                <tr>
                  <td>Resolution</td>
                  <td>FHD 1920x1080</td>
                </tr>
                <tr>
                  <td>Aspect ratio</td>
                  <td>16:9</td>
                </tr>
                <tr>
                  <td>Refresh rate</td>
                  <td>120 Hz</td>
                </tr>
                </tbody>
              </table>
            </div>
            <hr className={clsx('divider')} />
            <h2
              id="keyboard"
              data-ss="keyboard"
              className={clsx('heading heading-h2')}
            >
              Keyboard
            </h2>
            {/*<h2 className={clsx('heading heading-h3')}>Primary</h2>*/}
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Case</td>
                  <td>Krush65 PC / SS Black PVD</td>
                </tr>
                <tr>
                  <td>PCB</td>
                  <td>Solder 1 mode</td>
                </tr>
                <tr>
                  <td>Plate</td>
                  <td>Alu / Top mount</td>
                </tr>
                <tr>
                  <td>Switch</td>
                  <td>KTT Meow 5PIN Linear 43g</td>
                </tr>
                <tr>
                  <td>Keycap</td>
                  <td>GMK Mictlan</td>
                </tr>
                </tbody>
              </table>
            </div>
            <hr className={clsx('divider')} />
            <h2
              id="mouse"
              data-ss="mouse"
              className={clsx('heading heading-h2')}
            >
              Mouse
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Model</td>
                  <td>ATK A9 Ultra / 3 modes</td>
                </tr>
                <tr>
                  <td>Sensors</td>
                  <td>PAW3950 Ultra</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>125mm x 64mm x 40mm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>55g</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Model</td>
                  <td>ATK A9 Mini Plus / 2 modes</td>
                </tr>
                <tr>
                  <td>Sensors</td>
                  <td>PAW3955 Master</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>118,4mm x 61,2mm x 38,6mm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>45g</td>
                </tr>
                </tbody>
              </table>
            </div>
            <hr className={clsx('divider')} />
            <h2
              id="audio-devices"
              data-ss="audio-devices"
              className={clsx('heading heading-h2')}
            >
              Audio Devices
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Speaker</td>
                  <td>Divoom DiToo Pro</td>
                </tr>
                <tr>
                  <td>Speaker</td>
                  <td>Marshall Emberton 2</td>
                </tr>
                <tr>
                  <td>Earbuds</td>
                  <td>Apple EarPods 3.5mm</td>
                </tr>
                <tr>
                  <td>Earbuds</td>
                  <td>Apple EarPods USB-C</td>
                </tr>
                <tr>
                  <td>IEM</td>
                  <td>GK Kunten 3.5mm</td>
                </tr>
                </tbody>
              </table>
            </div>
            <hr className={clsx('divider')} />
            <h2
              id="others"
              data-ss="others"
              className={clsx('heading heading-h2')}
            >
              Others
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Music player</td>
                  <td>Apple iPod Shuffle Gen 4</td>
                </tr>
                <tr>
                  <td>Mouse pad</td>
                  <td>Pulsar ParaGlide XL</td>
                </tr>
                <tr>
                  <td>Keyboard pad</td>
                  <td>NRKB Mictlan</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={clsx(
              'border-divider-light hidden border-l dark:border-divider-dark lg:block'
            )}
          />
        </div>
      </div>
    </Page>
  );
}
