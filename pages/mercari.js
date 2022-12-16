import myStyles from '../styles/myscss.module.css'


const Mercari = () => {
  return (
    <div className={myStyles.wrapper}>
		<header>
			<div className={myStyles.logo}>
			</div>
			<nav>
				<div className={myStyles.nav_link}>

					<ul>
						<li><a href="./information.html">おすすめ</a></li>
						<li><a className="" href="./login.html">マイリスト</a></li>
						<li><a className="" href="./register.html">ピックアップ</a></li>
					</ul>
		
				</div>
				<button>
					出品
				</button>
			</nav>

		</header>
		<div className={myStyles.product_container}>
			あああ
		</div>

		
	</div>

  )
}

export default Mercari;