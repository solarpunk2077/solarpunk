import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <>
      <svg viewBox="0 -2 34 36" aria-hidden="true" {...props}>
        <rect
          clipPath={`url(#${id}-clip)`}
          className={clsx(
            'h-8 transition-all duration-300',
            invert ? 'fill-white' : 'fill-neutral-950',
            filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
          )}
        />
        <use
          href={`#${id}-path`}
          className={invert ? 'stroke-white' : 'stroke-neutral-950'}
          fill="none"
          strokeWidth="1.5"
        />
        <defs>
          <path
            id={`${id}-path`}
            d="M8.54425 13.6155L8.56512 4.61882L16.5437 9.23302L16.5179 18.3934L16.5071 18.3872L16.4818 27.3813L8.50757 22.8396L8.52898 13.6067L8.54425 13.6155ZM16.5437 9.23302L16.5651 0L24.5436 4.61425L24.5178 13.7746L16.5437 9.23302Z M0.529235 18.2254L0.507812 27.4584L8.48198 32L8.50776 22.8396L0.529235 18.2254Z"
          />
          <clipPath id={`${id}-clip`}>
            <use href={`#${id}-path`} />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 160 34"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M43.6722 29.312C42.2802 29.312 41.0322 29.024 39.9282 28.448C38.8402 27.856 37.9442 26.936 37.2402 25.688L40.1442 23.84C40.5602 24.672 41.0882 25.296 41.7282 25.712C42.3842 26.112 43.0962 26.312 43.8642 26.312C44.6322 26.312 45.2402 26.136 45.6882 25.784C46.1522 25.432 46.3842 24.968 46.3842 24.392C46.3842 23.864 46.2162 23.432 45.8802 23.096C45.5442 22.76 45.1122 22.496 44.5842 22.304C44.0722 22.096 43.3922 21.88 42.5442 21.656C41.2002 21.304 40.1522 20.736 39.4002 19.952C38.6642 19.168 38.2962 18.16 38.2962 16.928C38.2962 15.936 38.5442 15.064 39.0402 14.312C39.5362 13.544 40.2322 12.952 41.1282 12.536C42.0242 12.12 43.0562 11.912 44.2242 11.912C45.4882 11.912 46.5602 12.176 47.4402 12.704C48.3362 13.232 49.1122 14.008 49.7682 15.032L46.8882 16.808C46.4722 16.136 46.0482 15.656 45.6162 15.368C45.1842 15.064 44.6642 14.912 44.0562 14.912C43.3682 14.912 42.8082 15.08 42.3762 15.416C41.9442 15.752 41.7282 16.2 41.7282 16.76C41.7282 17.32 41.9442 17.744 42.3762 18.032C42.8082 18.304 43.4802 18.584 44.3922 18.872C45.5122 19.224 46.4082 19.552 47.0802 19.856C47.7522 20.16 48.3762 20.672 48.9522 21.392C49.5282 22.096 49.8162 23.032 49.8162 24.2C49.8162 25.208 49.5682 26.104 49.0722 26.888C48.5762 27.656 47.8642 28.256 46.9362 28.688C46.0082 29.104 44.9202 29.312 43.6722 29.312Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M57.347 29.312C56.083 29.312 54.947 29.024 53.939 28.448C52.931 27.856 52.139 27.064 51.563 26.072C50.987 25.064 50.699 23.968 50.699 22.784C50.699 21.6 50.987 20.504 51.563 19.496C52.139 18.488 52.931 17.696 53.939 17.12C54.947 16.528 56.083 16.232 57.347 16.232C58.611 16.232 59.747 16.528 60.755 17.12C61.763 17.696 62.555 18.488 63.131 19.496C63.707 20.504 63.995 21.6 63.995 22.784C63.995 23.968 63.707 25.064 63.131 26.072C62.555 27.064 61.763 27.856 60.755 28.448C59.747 29.024 58.611 29.312 57.347 29.312ZM53.939 22.784C53.939 23.44 54.075 24.04 54.347 24.584C54.635 25.128 55.035 25.56 55.547 25.88C56.075 26.2 56.675 26.36 57.347 26.36C58.019 26.36 58.611 26.2 59.123 25.88C59.651 25.56 60.051 25.128 60.323 24.584C60.611 24.04 60.755 23.44 60.755 22.784C60.755 22.128 60.611 21.528 60.323 20.984C60.035 20.44 59.635 20.008 59.123 19.688C58.611 19.352 58.019 19.184 57.347 19.184C56.675 19.184 56.083 19.352 55.571 19.688C55.059 20.008 54.659 20.44 54.371 20.984C54.083 21.528 53.939 22.128 53.939 22.784Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M65.429 11.48H68.669V29H65.429V11.48Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M76.2732 29.312C75.1532 29.312 74.1212 29.024 73.1772 28.448C72.2332 27.856 71.4812 27.064 70.9212 26.072C70.3772 25.08 70.1052 23.992 70.1052 22.808C70.1052 21.624 70.3772 20.536 70.9212 19.544C71.4812 18.536 72.2332 17.736 73.1772 17.144C74.1212 16.552 75.1532 16.256 76.2732 16.256C77.2972 16.256 78.1212 16.448 78.7452 16.832C79.3852 17.216 79.8812 17.768 80.2332 18.488V16.52H83.4492V29H80.3052V26.96C79.9372 27.712 79.4332 28.296 78.7932 28.712C78.1692 29.112 77.3292 29.312 76.2732 29.312ZM73.3452 22.784C73.3452 23.424 73.4892 24.024 73.7772 24.584C74.0812 25.128 74.4892 25.568 75.0012 25.904C75.5292 26.224 76.1292 26.384 76.8012 26.384C77.4892 26.384 78.0972 26.224 78.6252 25.904C79.1692 25.584 79.5852 25.152 79.8732 24.608C80.1612 24.064 80.3052 23.464 80.3052 22.808C80.3052 22.152 80.1612 21.552 79.8732 21.008C79.5852 20.448 79.1692 20.008 78.6252 19.688C78.0972 19.352 77.4892 19.184 76.8012 19.184C76.1292 19.184 75.5292 19.352 75.0012 19.688C74.4732 20.008 74.0652 20.44 73.7772 20.984C73.4892 21.528 73.3452 22.128 73.3452 22.784Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M85.3743 16.52H88.5183V18.896C88.7423 17.984 89.1743 17.296 89.8143 16.832C90.4703 16.368 91.3263 16.168 92.3823 16.232V19.28H91.9263C90.9663 19.28 90.1743 19.584 89.5503 20.192C88.9263 20.784 88.6143 21.592 88.6143 22.616V29H85.3743V16.52Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M93.4602 16.52H96.6522V18.536C97.0202 17.8 97.5162 17.24 98.1402 16.856C98.7642 16.456 99.5962 16.256 100.636 16.256C101.756 16.256 102.788 16.552 103.732 17.144C104.676 17.736 105.42 18.536 105.964 19.544C106.524 20.536 106.804 21.624 106.804 22.808C106.804 23.992 106.524 25.08 105.964 26.072C105.42 27.064 104.676 27.856 103.732 28.448C102.788 29.024 101.756 29.312 100.636 29.312C99.6282 29.312 98.8042 29.128 98.1642 28.76C97.5402 28.376 97.0522 27.84 96.7002 27.152V33.8H93.4602V16.52ZM96.6042 22.808C96.6042 23.464 96.7482 24.064 97.0362 24.608C97.3242 25.152 97.7322 25.584 98.2602 25.904C98.8042 26.224 99.4202 26.384 100.108 26.384C100.78 26.384 101.372 26.224 101.884 25.904C102.412 25.568 102.82 25.128 103.108 24.584C103.412 24.024 103.564 23.424 103.564 22.784C103.564 22.128 103.42 21.528 103.132 20.984C102.844 20.44 102.436 20.008 101.908 19.688C101.38 19.352 100.78 19.184 100.108 19.184C99.4202 19.184 98.8042 19.352 98.2602 19.688C97.7322 20.008 97.3242 20.448 97.0362 21.008C96.7482 21.552 96.6042 22.152 96.6042 22.808Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M112.881 29.288C111.985 29.288 111.177 29.08 110.457 28.664C109.737 28.232 109.169 27.632 108.753 26.864C108.337 26.08 108.129 25.176 108.129 24.152V16.52H111.369V23.36C111.369 25.424 112.201 26.456 113.865 26.456C114.601 26.456 115.217 26.2 115.713 25.688C116.209 25.16 116.457 24.384 116.457 23.36V16.52H119.697V29H116.553V27.128C116.249 27.864 115.801 28.408 115.209 28.76C114.617 29.112 113.841 29.288 112.881 29.288Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M121.609 16.52H124.801V18.344C125.457 16.936 126.729 16.232 128.617 16.232C129.513 16.232 130.321 16.448 131.041 16.88C131.761 17.296 132.329 17.896 132.745 18.68C133.161 19.448 133.369 20.344 133.369 21.368V29H130.129V22.16C130.129 21.12 129.889 20.344 129.409 19.832C128.929 19.32 128.273 19.064 127.441 19.064C126.705 19.064 126.089 19.328 125.593 19.856C125.097 20.368 124.849 21.136 124.849 22.16V29H121.609V16.52Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M138.419 23.072V29H135.179V11.48H138.419V21.56L143.099 16.52H147.707L141.827 22.328L147.731 29H143.435L138.419 23.072Z"
      />
    </svg>
  )
}