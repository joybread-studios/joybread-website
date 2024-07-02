'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import onScreen from '../hooks/onScreen'
import React, { useRef } from 'react'

const Header : React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = onScreen(ref);

	return (
		<div>
			<div ref={ref} className='w-full h-fit absolute flex justify-between items-center pl-8 pr-4'>
				<Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={250} width={250}/>
				<div className='w-1/4 flex justify-evenly items-center'>
					<Button href='#works'>Works</Button>
					<Button href='#about'>About</Button>
					<Button href='#hire-us' withBorder={true}>Hire Us</Button>
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
	return (
		<div className={`px-8 w-full fixed flex justify-between items-center transition duration-1000 ease-in-out bg-[#131217]/[50%] ${isVisible ? '-translate-y-32' : 'translate-y-0'} z-50`}>
			<Image src='/static/images/Bread.png' alt='bread' height={100} width={100}/>
			<div className='w-1/4 flex justify-evenly items-center'>
				<Button href='#works'>Works</Button>
				<Button href='#about'>About</Button>
				<Button href='#hire-us' withBorder={true}>Hire Us</Button>
			</div>
		</div>
	)
}

export default Header;