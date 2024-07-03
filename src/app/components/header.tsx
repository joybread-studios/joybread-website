'use client'
import Image from 'next/image'
import Button from './button'
import onScreen from '../hooks/onScreen'
import React, { useEffect, useRef, useState } from 'react'

const Header : React.FC = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = onScreen(ref);

	const checkIfMobile = () => {
		if(window.innerWidth > 640) setIsMobile(true);
		else setIsMobile(false);
	}

	useEffect(() => {
		window.addEventListener('resize', checkIfMobile);
		return (() => {
			window.removeEventListener('resize', checkIfMobile);
		})
	}, [isMobile]);

	return (
		<div>
			<div ref={ref} className='w-full h-fit absolute flex justify-between items-center z-40'>
				<Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={250} width={250} className={`${!isMobile ? '' : 'p-4'}`}/>
				<div className='w-1/4 flex justify-evenly items-center'>
					{isMobile ? 
						<>
							<Button href='#works'>Works</Button>
							<Button href='#about'>About</Button>
							<Button href='#hire-us' withBorder={true}>Hire Us</Button>
						</> 
					: 
						<>
							<Button href='' withBorder={true}>Menu</Button>
						</>
					}
				</div>
			</div>
			<StickyHeader isVisible={isVisible} />
		</div>	
	)
}

interface StickyHeaderProps {
	isVisible: boolean;
}

const StickyHeader : React.FC<StickyHeaderProps> = ({isVisible}) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const checkIfMobile = () => {
		if(window.innerWidth > 640) setIsMobile(true);
		else setIsMobile(false);
	}

	useEffect(() => {
		window.addEventListener('resize', checkIfMobile);
		return (() => {
			window.removeEventListener('resize', checkIfMobile);
		})
	}, [isMobile]);
	
	return (
		<div className={`w-full fixed flex justify-between items-center transition duration-1000 ease-in-out bg-[#131217]/[50%] ${isVisible ? '-translate-y-32' : 'translate-y-0'} z-50`}>
			<Image src='/static/images/Bread.png' alt='bread' height={100} width={100} className={`${!isMobile ? '' : 'p-4'}`}/>
			<div className='w-1/4 flex justify-evenly items-center'>
				{isMobile ? 
						<>
							<Button href='#works'>Works</Button>
							<Button href='#about'>About</Button>
							<Button href='#hire-us' withBorder={true}>Hire Us</Button>
						</> 
					: 
						<>
							<Button href='' withBorder={true}>Menu</Button>
						</>
					}
			</div>
		</div>
	)
}

export default Header;